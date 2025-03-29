from rembg import remove
from PIL import Image

# Open the image
input_path = "D:/TANTRA/New/tantrastyle.jpeg"
output_path = "D:/TANTRA/New/tantrastyle_transparent.png"

image = Image.open(input_path)

# Remove the background
transparent_image = remove(image)

# Save the output
transparent_image.save(output_path)
print("Background removed successfully!")
