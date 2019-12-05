import spotipy
from spotipy.oauth2 import SpotifyOAuth
from spotipy.oauth2 import SpotifyClientCredentials

client_id = "eaa4e93ebccf4467b5c4ef3e90a835b7"
client_secret = "b0d2a06694294308a8706d3f9bbea5a4"
authenticator = SpotifyOAuth(client_id, client_secret)
client_credentials_manager = SpotifyClientCredentials()
spotify = spotipy.Spotify(client_credentials_manager=client_credentials_manager)


def search(name, query_type=None):
    if query_type:
        return spotify.search(name, type=query_type)
    return spotify.search(name)


search("lana del rey")


