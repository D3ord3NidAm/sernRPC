# Discord RPC for the sern Community

A simple rpc package to advertise the sern handler on profiles.

# Setup

Fork or clone this repository.

This package requires the Discord Client to be open and logged into.

- Go [here](https://discord.com/developers/applications/) to set up your application.
  - Login, if you haven't already
  - Click on `Create New Application`
    - The name of your app will be displayed as your activity.
  - Copy your `Application ID` (same as Client ID).
    - Paste this into `.env.example` as `clientId`.
  - Go to `Rich Presence` then `Art Assets`
    - Click `Add Images` near the bottom of the page.
    - Upload the images that I provided in the assets folder of the repo.
      - Remember the name and capitalization you uploaded the images as.
    - After uploading the images, refresh the page and make sure they successfully uploaded.
      - If they disappear, just refresh the page until they come back.
      - They have to be there to see them in the next step.
    - Set your cover image to the sern logo that was just uploaded.
  - Go to `Visualizer`
    - Copy your `Start Timestamp`.
      - Paste this into `.env.example` as `startedTimestamp`.
      - Alternatively, you can make the time elapsed restart everytime you restart the app.
        - Change `startTimestamp: Number(startTimestamp),` to `startTimestamp: new Date(),`.
    - Customize the `state` and `detail` to your liking.
      - Make sure these properties match the properties in the index of the repo.
    - Select the proper images for `LARGE IMAGE KEY` and `SMALL IMAGE KEY`.
      - These properties should match your index as well.
      - The text properties should also match (make sure there are no special characters!)

# CUSTOMIZE

Now you can customize the buttons to your liking but you can only have a max of 2!

# START

- Time to start the application.

  - Rename `.env.example` to `.env`
  - Start the app with `npm run start` (uses node) or `npm run dev` (uses nodemon).
  - That's it! You now have a custom presence!

- I have created a simple .bat file in assets directory.
  - I placed it on my desktop and edited the file path to find my index file.
  - Changed default terminal to Windows Terminal and edited settings to minimze to taskbar so it's hidden.
