import googlemaps

gmaps = googlemaps.Client(key="AIzaSyDJeQ0Lv9J1EXAPnIsaw9N1tWkEsuGDIgE")  # Ensure this is correct

def get_nearest_water_distance(latitude, longitude):
    try:
        places_result = gmaps.places_nearby(
            location=(latitude, longitude),
            radius=5000,  # Adjust radius if needed
            type="natural_feature"  # This helps find water bodies
        )
        return places_result
    except googlemaps.exceptions.ApiError as e:
        print(f"Google Maps API Error: {e}")
    except Exception as e:
        print(f"General Error: {e}")

# Test the function
latitude, longitude = 28.6139, 77.2090  # Example coordinates (New Delhi)
distance = get_nearest_water_distance(latitude, longitude)
print(distance)
