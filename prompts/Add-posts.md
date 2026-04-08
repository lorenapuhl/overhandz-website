# Add posts

IMG_FOLDER = @public/images/events/
DATA_FILE = @components/data/events.ts


I have new Instagram post screenshots saved in IMG_FOLDER.
Each screenshot is a full 1920×1080 browser capture of an Instagram post page.

Please do the following:

1. **List the screenshots** in that folder, ordered by filename (timestamp order).

2. **View each screenshot** using the Read tool to visually inspect the post image
and
 read the caption text and like count shown in the right panel.

3. **Crop each screenshot** to isolate just the post image — no browser chrome, no
 Instagram sidebar, no navigation arrows, no carousel dots, no comments panel.
 Use these coordinates (confirmed for this setup):
   x_left=367, x_right=989, y_up=180, y_down=1017
 which translates to the ImageMagick crop argument: 622x837+367+180
 Run: magick "input.png" -crop 622x837+367+180 +repage "output.png"
 Save the cropped files to `post-1.png` through
 `post-N.png` (numbered in the same order as the
 screenshots).

4. **Update ** — replace the existing instagram posts
 array with one entry per post. 
 - imageUrl: "/images/instagram/post-N.png"
 - Fill in the metadata in DATAFILE with metadata from the screenshot. If some metadata is not visible or deductible from the screenshot, use NULL or empty string or any other empty data-type

 Keep the InstagramPost interface unchanged. Do not use placeholder images.

5. **Verify** by reading back DATA_FILE to confirm all
entries look correct.

Note: local `/public/` images do not need to be whitelisted in `next.config.ts`.
The InstagramFeed component already renders `post.likes` and `post.caption` on
hover
— no TSX changes are needed.

