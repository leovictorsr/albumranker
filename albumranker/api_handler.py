import spotipy

from spotipy.oauth2 import SpotifyClientCredentials


ALBUM = "album:{}"
ARTIST = "artist:{}"
CLIENT_ID = "eaa4e93ebccf4467b5c4ef3e90a835b7"
CLIENT_SECRET = "b0d2a06694294308a8706d3f9bbea5a4"

spotify_ccm = SpotifyClientCredentials(client_id=CLIENT_ID, client_secret=CLIENT_SECRET)
spotify = spotipy.Spotify(client_credentials_manager=spotify_ccm)


def search(query, type):
    albums = []
    result = {}

    if type == "album":
        albums = spotify.search(q=ALBUM.format(query), type="album", limit=20)["albums"]
    elif type == "artist":
        artist = get_artist(query)
        if artist:
            albums = get_artist_albums(artist)
        else:
            return "No artist found."

    if albums:
        result = build_album_list(albums["items"])
        return result
    return "No album found."


def get_artist(query):
    results = spotify.search(q=ARTIST.format(query), type="artist")
    items = results["artists"]["items"]
    if len(items) > 0:
        return items[0]
    else:
        return None


def get_artist_albums(artist):
    return spotify.artist_albums(artist["id"], album_type="album", country="BR")


def build_album_list(albums):
    album_list = []
    for album in albums:
        tracks = spotify.album_tracks(album["id"])
        result_tracks = build_track_list(tracks["items"])
        result_album = {
            "image": album["images"][0],
            "artist": album["artists"][0]["name"],
            "name": album["name"],
            "tracks": result_tracks,
            "total_tracks": album["total_tracks"],
        }
        album_list.append(result_album)
    return album_list


def build_track_list(tracks):
    track_list = []
    for track in tracks:
        duration_minutes = (int(track["duration_ms"]) // 1000) // 60
        duration_seconds = int(track["duration_ms"]) // 1000 - duration_minutes * 60
        result_track = {
            "duration_formatted": "{}:{:02d}".format(
                duration_minutes, duration_seconds
            ),
            "duration_seconds": int(track["duration_ms"]) * 1000,
            "name": track["name"],
            "preview_url": track["preview_url"],
            "track_number": track["track_number"],
        }
        track_list.append(result_track)
    return track_list
