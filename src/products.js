const products = [
  //phones
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra 5G",
    category: "phones",
    amount: 1,
    price: 124999,
    description: `More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. From the metal frame to the glass finish, it's polished with fresh new colors inspired by nature.
      Note's signature tool comes built in - The built-in S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks, making sketches and jotting notes effortless and eco-friendly.
      Low light. Camera. Action - A Pro-grade Camera grabs brighter photos and video, dusk to dawn. The intelligent pixel sensor adapts to low light with Nightography and the camera lens tones down flare for clearer captures
      200MP. Wow-worthy resolution - Resolution on the Wide-angle Camera has nearly doubled, delivering strikingly clear photos. Zoom and crop your shots for a whole new view —or leave it intact for brilliant detail, corner to corner.
      Power for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery`,
    imageUrl: "https://m.media-amazon.com/images/I/61j99uUfXNL._SX522_.jpg",
  },
  {
    id: 2,
    name: "OnePlus 11 5G",
    category: "phones",
    amount: 1,
    price: 61999,
    description: `Camera: 50MP Main Camera with Sony IMX890 (OIS supported), 48MP Ultrawide Camera with Sony IMX581 (FOV: 115 degree) and 32MP Telephoto lens with Sony IMX709 (2X Optical Zoom); 16MP Front (Selfie) Camera with EIS support
      Camera Modes: Photo, Video, Night, PRO, PANO, Portrait, TIME-LAPSE, SLO-MO, Text scanner, Movie, Long Exposure, Dual-view video, TILT-SHIFT, XPAN, Scan, STICKER, and AI ID photo
      Display: 6.7 Inches; 120 Hz AMOLED QHD Display with Corning Gorilla Glass Victus; Resolution: 3216 X 1440 pixels; HDR 10+, sRGB, 10-bit Color Depth, PWM + DC dimming
      Operating System: OxygenOS based on Android 13
      Processor: Snapdragon 8 Gen 2 Mobile Platform
      16GB LPDDR5X RAM, 256GB UFS4.0 Storage
      Battery & Charging: 5000 mAh with 100W SUPERVOOC
      In-Display Fingerprint Sensor`,
    imageUrl:
      "https://m.media-amazon.com/images/I/414+xRBltFL._SY300_SX300_.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy Z Fold4 5G",
    category: "phones",
    amount: 1,
    price: 149990,
    description: `Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen and no black dot getting between you and the breathtaking Infinity Flex Display.
      Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket transforms apps optimized with One UI to give you menus and more in a glance
      New Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Add apps to the Taskbar for quick navigation and bouncing between windows when you're in the groove.4 And with App Pair, one tap launches up to three apps, all sharing one super-productive screen
      Our toughest Samsung Galaxy foldables ever. From the inside out, Galaxy Z Fold4 is made with materials that are not only stunning, but stand up to life's bumps and fumbles. The front and rear panels, made with exclusive Corning Gorilla Glass Victus+, are ready to resist sneaky scrapes and scratches. With our toughest aluminum frame made with Armor Aluminum, this is one durable smartphone.
      World’s first water resistant foldable smartphones. Be adventurous, rain or shine. You don't have to sweat the forecast when you've got one of the world's first water-resistant foldable smartphones.
      `,
    imageUrl: "https://m.media-amazon.com/images/I/61cInRWmClL._SL1500_.jpg",
  },
  {
    id: 4,
    name: "Apple iPhone 13",
    category: "phones",
    amount: 1,
    price: 61999,
    description: `15 cm (6.1-inch) Super Retina XDR display
      Cinematic mode adds shallow depth of field and shifts focus automatically in your videos
      Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording
      12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording
      A15 Bionic chip for lightning-fast performance`,
    imageUrl: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
  },
  {
    id: 5,
    name: "Apple iPhone 14",
    category: "phones",
    amount: 1,
    price: 76999,
    description: `15.40 cm (6.1-inch) Super Retina XDR display
      Advanced camera system for better photos in any light
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      Vital safety technology — Crash Detection calls for help when you can’t
      All-day battery life and up to 20 hours of video playback
      Industry-leading durability features with Ceramic Shield and water resistance
      `,
    imageUrl: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg",
  },
  {
    id: 6,
    name: "Apple iPhone 14 Plus",
    category: "phones",
    amount: 1,
    price: 80999,
    description: `16.95 cm (6.7-inch) Super Retina XDR display
      Advanced camera system for better photos in any light
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      Vital safety technology — Crash Detection calls for help when you can’t
      All-day battery life and up to 26 hours of video playback
      Industry-leading durability features with Ceramic Shield and water resistance`,
    imageUrl: "https://m.media-amazon.com/images/I/61BGE6iu4AL._SL1500_.jpg",
  },
  {
    id: 7,
    name: "Apple iPhone 14 Pro",
    category: "phones",
    amount: 1,
    price: 119999,
    description: `15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion
      Dynamic Island, a magical new way to interact with iPhone
      48MP Main camera for up to 4x greater resolution
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      All-day battery life and up to 23 hours of video playback
      Vital safety technology — Crash Detection calls for help when you can’t`,
    imageUrl: "https://m.media-amazon.com/images/I/61HHS0HrjpL._SL1500_.jpg",
  },
  {
    id: 8,
    name: "Apple iPhone 14 Pro Max",
    category: "phones",
    amount: 1,
    price: 141990,
    description: `17.00 cm (6.7-inch) Super Retina XDR display featuring Always-On and ProMotion
      Dynamic Island, a magical new way to interact with iPhone
      48MP Main camera for up to 4x greater resolution
      Cinematic mode now in 4K Dolby Vision up to 30 fps
      Action mode for smooth, steady, handheld videos
      All-day battery life and up to 29 hours of video playback
      Vital safety technology — Crash Detection can detect a severe car crash and call for help`,
    imageUrl: "https://m.media-amazon.com/images/I/71T5NVOgbpL._SX679_.jpg",
  },
  {
    id: 9,
    name: "iQOO 11 5G",
    category: "phones",
    amount: 1,
    price: 59999,
    description: `Snapdragon 8 Gen 2 Mobile Platform adopts TSMC 4NM process which has 10% higher CPU peak performance and 20% higher GPU peak performance than Snapdragon 8+ Gen 1. Also, equipped with LPDDR5X RAM & UFS 4.0 storage.
      The 2K AMOLED display has 77.8% more pixels than the 1080P display. E6 Performs much better than E4 in terms of power consumption and brightness. 25% less in Power Consumption and 1800 nits Local Peak Brightness
      iQOO 11's 120W FlashCharge charges 50% battery in just 8 mins and 100% battery in just 25 mins
      V2 Chip provides better gaming and photography experience. It can increase the frame rate from 45fps/ 60fps to 90fps & 120fps respectively. It also facilitates users to shoot better night videos/ photos.
      GN5 sensor's dual pixel pro technology improves the autofocus function of the phone. The sensor is 50 MP in resolution.`,
    imageUrl: "https://m.media-amazon.com/images/I/71ZeuCAbcSL._SL1200_.jpg",
  },
  {
    id: 10,
    name: "iQOO Neo 7 5G",
    category: "phones",
    amount: 1,
    price: 28999,
    description: `MediaTek Dimensity 8200 5G Mobile platform adopts TSMC 4nm process and has excellent Power Efficiency Performance. Also, Equipped with the LPDDR5 RAM & UFS 3.1 Storage.
      The 120W FlashCharge charges from 1% to 50% in just 10 minutes (25 minutes for a full charge)
      Motion Control powered by Gyroscope & Acceleration Sensors to give 6 additional Phone movement-based control options while Gaming
      6.78” 120Hz AMOLED Display with HDR 10+ Certification, Netflix HDR Support & 1300 Nits Peak Brightness
      64MP OIS Camera, Dual Stereo Speakers, X-Axis Linear Motor and Extended RAM 3.0 (8GB+8GB)`,
    imageUrl: "https://m.media-amazon.com/images/I/61JS7lF2aqL._SL1200_.jpg",
  },
  {
    id: 11,
    name: "Xiaomi 13 Pro",
    category: "phones",
    amount: 1,
    price: 79999,
    description: `50MP Leica professional optics helps in capture images in great detail. The largest camera sensor on a smartphone - Sony IMX989 1 inch sensor with 3.2 μm large pixels captures brighter images even in extreme lowlight. The 50MP Telephoto-Macro(75mm Leica portrait) and 50MP Ultra-wide lens enables you to capture in different perspectives. Xiaomi 13 Pro can supports 8K video recording and also can record in Dolby Vision for a professional cinematography experience. The high resolution 32MP front camera comes with smart FoV switching
      The 6.73 inch 2K 120Hz E6 AMOLED display with a peak brightness of 1900nits meets the most demanding needs and provides the best viewing experience. The 10bit LTPO 3.0 display is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus
      The flagship Snapdragon 8 Gen 2, 4nm processor is designed to provide groundbreaking performance. The processor has 37% improved multi-core CPU performance over the previous generation. The processor is coupled with faster UFS 4.0 Storage and LPDDR5X RAM for extreme performance. The super-big 3400mm² vapour chamber helps in keeping the phone temperatures in check even at peak performance`,
    imageUrl: "https://m.media-amazon.com/images/I/41n0qlda6gL._SX522_.jpg",
  },
  {
    id: 12,
    name: "OnePlus 11R 5G",
    category: "phones",
    amount: 1,
    price: 39999,
    description: `Camera: Sensor: 50MP Main Camera with Sony IMX890 (OIS supported), 8MP Ultrawide Camera (FOV: 120 degree) and Macro Lens; 16MP Front (Selfie) Camera with EIS support.
      Camera Modes: Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama, Tilt-Shift mode, Long Exposure, Dual-View Video, Retouch, Movie Mode, Raw file, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse, Macro mode
      Display: 6.7 Inches; 120 Hz Super Fluid AMOLED; Resolution: 2772 X 1240 pixels ,450 ppi, 20.1:9, 10-bit Color Depth, HDR10+
      Operating System: OxygenOS based on Android 13
      Processor: Snapdragon 8+ Gen 1 Mobile Platform
      8GB LPDDR5X RAM, 128GB UFS3.1 STORAGE
      Battery & Charging: 5000 mAh with 100W SuperVOOC
      In-Display Fingerprint Sensor`,
    imageUrl: "https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg",
  },
  {
    id: 13,
    name: "OnePlus 10 Pro 5G",
    category: "phones",
    amount: 1,
    price: 59999,
    description: `Camera: 48MP Main Camera with Sony IMX 789 Lens (OIS enabled), 50MP Ultra-wide angle camera & 8MP Tele photo lens; Front (Selfie) Camera: 32MP; Flash: Dual LED
      Camera Features: Hasselblad Camera for Mobile, Nightscape, Ultra HDR, Smart Scene Recognition, Portrait Mode, Pro Mode, Panorama Mode, Tilt-Shift mode, Long Exposure Mode, 150° Wide angle Mode, Dual-View Video, Movie Mode, Xpan Mode, Filters, Super Stable, Video Nightscape, Video HDR, Video Portrait, Focus Tracking, Timelapse
      Display: 6.7 Inches; 120 Hz QHD+ Fluid AMOLED with LTPO; Resolution: 3216 x 1440; Aspect Ratio: 20:9
      Display Features: Nature tone display, Video colour enhancer, Colour personalization, Colour vision enhancement, Auto brightness, Manual brightness, Screen colour temperature, Bright HDR video mode, Night Mode, Multi-brightness colour calibration, Vibrant Colour Effect Pro, Ultra high resolution video
      Operating System: Oxygen OS based on Android 12. 1400°C Heat-tested, 30% higher wear-resistance
      Processor: Qualcomm Snapdragon 8 Gen 1
      Battery & Charging: 5000 mAh with 80W SuperVOOC`,
    imageUrl: "https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg",
  },
  {
    id: 14,
    name: "Vivo V23 5G",
    category: "phones",
    amount: 1,
    price: 28389,
    description: `8 GB RAM | 128 GB ROM
      16.36 cm (6.44 inch) Full HD+ Display
      64MP + 8MP + 2MP | 50MP + 8MP Dual Front Camera
      4200 mAh Lithium Battery
      Mediatek Dimensity 920 Processor
      Connector type: 3.5mm jack`,
    imageUrl: "https://m.media-amazon.com/images/I/61dNmq2ZZeL._SL1500_.jpg",
  },
  {
    id: 15,
    name: "Xiaomi 12 Pro",
    category: "phones",
    amount: 1,
    price: 44999,
    description: `The Pro-grade triple 50MP camera array unleashes the true power of a triple-camera setup. The large 50MP Sony IMX707 captures upto 120% more light. The 50MP Telephoto & 50MP Ultra-wide enable you to enjoy a top-class cinematography experience. The 32MP front facing camera is segment best.
      The 6.73'' WQHD+ 120Hz AMOLED display with AdaptiveSync Pro is a master in clarity, brightness and smoothness. The display is certified A+ by DisplayMate & is Dolby Vision & HDR10+ compliant. It is protected by Corning Gorilla Glass Victus and comes with a In-display fingerprint sensor
      The flagship Snapdragon 8 Gen 1, 4nm processor is designed to provide groundbreaking performance. The super-big 2900mm² vapour chamber, along with three layers of massive graphite sheets provides an advanced cooling system.
      `,
    imageUrl: "https://m.media-amazon.com/images/I/71vNgTH3MzL._SL1500_.jpg",
  },
  {
    id: 16,
    name: "Google Pixel 6a 5G",
    category: "phones",
    amount: 1,
    price: 30940,
    description: `Pixel 6a adapts to you; it’s super fast and secure and powered by Tensor, the first chip designed just for Pixel
      Pixel’s fast-charging all-day battery adapts to you and saves power for the apps you use most
      Take amazing photos with Pixel’s 12 megapixel camera and tools like Magic Eraser, Motion Mode, and Portrait Mode
      With Tensor, your phone launches apps fast, pages and images load quickly, and everything runs smoothly
      Live Translate helps you translate live video captions, private chats, and messages, and signs in up to 55 languages right on your cell phone`,
    imageUrl: "https://m.media-amazon.com/images/I/314423cfIVL.jpg",
  },
  {
    id: 17,
    name: "Samsung Galaxy S23 Plus 5G",
    category: "phones",
    amount: 1,
    price: 104999,
    description: `More light for your night - Get ready for a Gallery full of epic night shots everyone will want. Nightography's enhanced AI keeps details clear, so low light photos and videos will be bright and colorful from dusk to dawn and back again.
      Designed with the planet in mind - Unbox the change you want to see in the world. Crafted with recycled glass and PET film and colored with natural dyes, each phone is tucked into a box made of recycled paper and paper-based protective film.
      Power for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy optimizes and streamlines your device for silky smooth games —without draining the battery.`,
    imageUrl: "https://m.media-amazon.com/images/I/61bM8Mojf6L._SL1500_.jpg",
  },
  {
    id: 18,
    name: "Google Pixel 6 Pro 5G",
    category: "phones",
    amount: 1,
    price: 43990,
    description: `Introducing Pixel 6 Pro, the completely redesigned, fully loaded Google 5G cell phone.[1] With a powerful camera system, next-gen security, and the custom Google Tensor processor, it’s the smartest and fastest Pixel yet.[2] And it’s an unlocked Android smartphone, so you can choose the data plan and carrier that work for you.[1] [1] Works with all major carriers. Contact carrier for details. 5G service is carrier dependent. Requires a 5G data plan (sold separately). 5G service not available on all carrier networks or in all areas. Contact carrier for details. 5G service, speed and performance depend on many factors, including carrier network capabilities and signal strength. Actual results may vary. Some features not available in all areas. Data rates may apply. See g.co/pixel/networkinfo for info. [2] Compared to Pixel 5. Based on internal CPU benchmark testing on pre-production devices. [3] Compared to main rear camera on Pixel 5. [4] Image simulated. Magic Eraser may not work on all image elements. [5] Deblurring may not work on all photos or videos with faces. [6] Fast wired charging rates are based upon use of the Google 30W USB-C Charger plugged into a wall outlet. Compatible with USB PD 3.0 PPS adapters. Actual results may be slower. Adapters sold separately.`,
    imageUrl: "https://m.media-amazon.com/images/I/71FpXTBHDnL._SL1500_.jpg",
  },
  {
    id: 19,
    name: "Google Pixel 7a 5G",
    category: "phones",
    amount: 1,
    price: 42500,
    description: `Google Pixel 7a is fast and efficient, with 8 GB of RAM, an amazing camera, and features rated highest in security[1]
      Pixel’s fast-charging all-day battery can last over 24 hours, or up to 72 hours when you turn on Extreme Battery Saver[2]; it also charges wirelessly
      With the Pixel Camera and Google Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Google Photos[3]
      With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold[4]; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places
      Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock`,
    imageUrl: "https://m.media-amazon.com/images/I/51tVQZ8XCxL._SL1024_.jpg",
  },
  {
    id: 20,
    name: "Google Pixel 7 5G",
    category: "phones",
    amount: 1,
    price: 45350,
    description: `Google Pixel 7 is fast and efficient, with 12 GB of RAM, an amazing camera, and features rated highest in security[1]
      Pixel’s fast-charging all-day battery can last over 24 hours, or up to 72 hours when you turn on Extreme Battery Saver[2]; it also charges wirelessly
      With the Pixel Camera and Google Tensor G2’s advanced image processing, it’s easy to take great pictures in low light, fix blurry images, and remove distractions with a few taps in Google Photos[3]
      With Pixel Call Assist, you can get help making calls, avoiding spammers, and waiting on hold[4]; plus, Pixel 7a can filter out your caller’s background noise so you can hear them clearly even in noisy places
      Open your Pixel 7a quickly and securely with Face Unlock or Fingerprint Unlock`,
    imageUrl: "https://m.media-amazon.com/images/I/51jahbKN6AL._SL1500_.jpg",
  },
  // Laptops
  {
    id: 21,
    name: "Apple 2020 MacBook Air Laptop M1 chip",
    category: "laptops",
    amount: 1,
    price: 79990,
    description: `All-Day Battery Life – Go longer than ever with up to 18 hours of battery life.
          Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.
          Superfast Memory – 8GB of unified memory makes your entire system speedy and responsive. That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.
          Stunning Display – With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. Text is sharp and clear, and colors are more vibrant.`,
    imageUrl: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg",
  },
  {
    id: 22,
    name: "Apple 2020 MacBook Pro 13.3-inch",
    category: "laptops",
    amount: 1,
    price: 115999,
    description: `Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
          Get more done with up to 20 hours of battery life, the longest ever in a Mac
          8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever
          8-core GPU with up to 5x faster graphics for graphics-intensive apps and games
          16-core Neural Engine for advanced machine learning
          8GB of unified memory so everything you do is fast and fluid
          Superfast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
  },
  {
    id: 23,
    name: "Apple 2021 MacBook Pro 14-inch",
    category: "laptops",
    amount: 1,
    price: 175999,
    description: `Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance
          Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever
          Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games
          16-core Neural Engine for up to 11x faster machine learning performance
          Longer battery life, up to 17 hours
          Up to 64GB of unified memory so everything you do is fast and fluid
          Up to 8TB of super-fast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/61vFO3R5UNL._SL1500_.jpg",
  },
  {
    id: 24,
    name: "Apple 2021 MacBook Pro 16-inch",
    category: "laptops",
    amount: 1,
    price: 235999,
    description: `Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance
      Up to 10-core CPU delivers up to 2x faster performance to fly through pro workflows quicker than ever
      Up to 32-core GPU with up to 4x faster performance for graphics-intensive apps and games
      16-core Neural Engine for up to 5x faster machine learning performance
      Longer battery life, up to 21 hours
      Up to 64GB of unified memory so everything you do is fast and fluid
      Up to 8TB of super-fast SSD storage launches apps and opens files in an instant`,
    imageUrl: "https://m.media-amazon.com/images/I/61aUBxqc5PL._SL1500_.jpg",
  },
  {
    id: 25,
    name: "HP Laptop 15s, 11th Gen Intel Core i3-1115G4",
    category: "laptops",
    amount: 1,
    price: 35990,
    description: `HP Laptop 15s, 11th Gen Intel Core i3-1115G4, 15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel UHD Graphics, Thin & Light, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fq2673TU
      
Brand	HP
Model Name	15s-fq2673TU
Screen Size	15.6 Inches
Colour	Natural Silver
Hard Disk Size	512 GB
CPU Model	Core i3
RAM Memory Installed Size	8 GB
Operating System	Windows 11 Home
Special Feature	Micro-Edge Display
Graphics Card Description	Integrated

      `,

    imageUrl: "https://m.media-amazon.com/images/I/71fSS6dVWzL._AC_UY218_.jpg",
  },
  {
    id: 26,
    name: "Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen ",
    category: "laptops",
    amount: 1,
    price: 50000,
    description: `Acer Aspire 5 Gaming Laptop Intel Core i5 12th gen (16 GB/512 GB SSD/Win11 Home/4GB Graphics/RTX 2050) A515-57G (15.6" FHD Display, 1.8 Kg)
    Brand	Acer
    Model Name	Aspire 5 Gaming
    Screen Size	15.6 Inches
    Colour	Gray
    Hard Disk Size	512 GB
    CPU Model	Core i5
    RAM Memory Installed Size	16 GB
    Operating System	Windows 11 Home
    Special Feature	Aluminum Top Cover, Wi-Fi 6, Elevated Design, Thunderbolt 4
    Graphics Card Description	Dedicated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/61xzutxSl8L._AC_UY218_.jpg",
  },
  {
    id: 27,
    name: "Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H ",
    category: "laptops",
    amount: 1,
    price: 46999,
    description: `Xiaomi Notebook Ultra Max 11th Gen Intel Core i5-11320H Thin & Light (16GB/512GB SSD/Iris Xe Graphics/15.6" 3.2K Resolution/Win 11/Thunderbolt 4/MS Office '21/Fingerprint Sensor/1.7 Kg)
        
Brand	Xiaomi
Model Name	Mi Notebook
Screen Size	15.6 Inches
Colour	Lustrous Gray
Hard Disk Size	512 GB
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows 11
Special Feature	Fingerprint Reader, Backlit Keyboard
Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/710aJMxsUXL._AC_UY218_.jpg",
  },
  {
    id: 28,
    name: "Dell 14 Laptop, Intel Core 11th Gen i3-1115G4",
    category: "laptops",
    amount: 1,
    price: 34990,
    description: `Dell 14 Laptop, Intel Core 11th Gen i3-1115G4/ 8GB/ 512GB /14.0"(35.56cm) FHD Display with Comfort View/Windows 11 + MSO'21/15 Month McAfee/Spill-Resistant Keyboard/Carbon Black Color/1.48kg
    Brand	Dell
    Model Name	Vostro 3420
    Screen Size	14 Inches
    Colour	Carbon Black
    Hard Disk Size	512 GB
    CPU Model	Core i3
    RAM Memory Installed Size	8 GB
    Operating System	Windows 11
    Special Feature	Full Size Keyboard
    Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/51cW1H73uVL._AC_UY218_.jpg",
  },
  {
    id: 29,
    name: "Dell G15 5520 Gaming Laptop",
    category: "laptops",
    amount: 1,
    price: 72990,
    description: `Dell G15 5520 Gaming Laptop, Intel i5-12500H/16GB DDR5/1TB SSD/15.6" (39.62cm) FHD WVA AG 120Hz 250 nits/NVIDIA RTX 3050, 4 GB GDDR6/Win 11 + MSO'21/15 Months McAfee/Backlit KB/Dark Shadow Grey/2.81kg
        
Brand	Dell
Model Name	Dell Gaming G15
Screen Size	15.6 Inches
Colour	Grey
Hard Disk Size	1 TB
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows 11 Home
Special Feature	Backlit Keyboard
Graphics Card Description	Dedicated

    `,
    imageUrl: "https://m.media-amazon.com/images/I/51jUcRK69ML._AC_UY218_.jpg",
  },
  {
    id: 30,
    name: "Dell Inspiron 7420 2in1 Touch Laptop",
    category: "laptops",
    amount: 1,
    price: 53990,
    description: `Dell Inspiron 7420 2in1 Touch Laptop,12th Gen Intel Core i3-1215U, 8GB/256GB SSD/14.0" (35.56Cms) FHD+ WVA 250 nits/Backlit KB + FPR/Windows 11 + MSO'21/15 Month McAfee/Platinum Silver/1.57KG
            
Brand	Dell
Model Name	Inspiron 7420
Screen Size	14 Inches
Colour	Platinum Silver
Hard Disk Size	256 GB
CPU Model	Core i3 Family
RAM Memory Installed Size	8 GB
Operating System	Windows 11 Home
Special Feature	Fingerprint Reader, Backlit Keyboard
Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41tRIAB4WuL._AC_SR160,160_.jpg",
  },
  {
    id: 31,
    name: "Lenovo ThinkPad E15",
    category: "laptops",
    amount: 1,
    price: 64990,
    description: `Lenovo ThinkPad E15 Intel Core i5 12th Gen 15.6" (39.62cm) FHD 250 Nits Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/Backlit/FPR/Black/1.7 kg), 21E6S05B00
            
Brand	Lenovo
Model Name	E15 Gen4
Screen Size	15.6 Inches
Colour	Black
Hard Disk Size	512 GB
CPU Model	Core i5-1235U
RAM Memory Installed Size	8 GB
Operating System	Windows 11 Home
Special Feature	Anti Glare Screen, Light Weight, Thin
Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41rha2gl+FL._AC_SR160,160_.jpg",
  },
  {
    id: 32,
    name: "HONOR MagicBook X16 (2023)",
    category: "laptops",
    amount: 1,
    price: 50990,
    description: `HONOR MagicBook X16 (2023), 12th Gen Intel Core i5-12450H (8GB/512GB NVMe SSD, 16-inch (40.64 cm) FHD IPS Anti-Glare Thin and Light Laptop/Windows 11/Backlit Keyboard/Fingerprint Login/1.75Kg), Gray
            
Brand	Honor
Model Name	BRN-F58
Screen Size	16 Inches
Colour	Space Gray
Hard Disk Size	512 GB
CPU Model	Core i5-12450H
RAM Memory Installed Size	8 GB
Operating System	Windows 11 Home
Special Feature	【Operating System】 Pre-Loaded Windows 11 Home 64-bit
Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41bqnz0wEDL._AC_SR160,160_.jpg",
  },
  {
    id: 33,
    name: "Acer Nitro 5 Gaming Laptop",
    category: "laptops",
    amount: 1,
    price: 69990,
    description: `Acer Nitro 5 Gaming Laptop AMD Ryzen™ 7 7735HS Octa-Core Processor- (16GB/ 512 GB SSD/NVIDIA GeForce RTX 3050 4GB Graphics/Windows 11 Home) AN515-47 with 39.6 Cm (15.6 Inch) IPS Display
    Brand	Acer
    Model Name	Nitro 5
    Screen Size	15.6 Inches
    Colour	Black
    Hard Disk Size	512 GB
    CPU Model	Ryzen 7
    RAM Memory Installed Size	16 GB
    Operating System	Windows 11 Home
    Special Feature	Webcam
    Graphics Card Description	Dedicated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41dCsY9mw-L._AC_SR160,160_.jpg",
  },
  {
    id: 34,
    name: "ASUS ROG Strix G16 (2023) ",
    category: "laptops",
    amount: 1,
    price: 89990,
    description: `ASUS ROG Strix G16 (2023) 64WHrs Battery, Intel Core i5-13450HX 13th Gen, 16" FHD+ 165Hz, 6GB RTX 3050, Gaming Laptop (16GB/512GB SSD/Windows 11/Office 2021/4-Zone RGB KB/Gray/2.50 Kg) G614JJ-N3086WS
    
Brand	ASUS
Model Name	ROG Strix G16
Screen Size	40.64 Centimetres
Colour	Eclipse Gray
Hard Disk Size	512 GB
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows 10 Home
Special Feature	Backlit Keyboard
Graphics Card Description	Dedicated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41J4IzmCKCL._AC_SR320,320_.jpg",
  },
  {
    id: 35,
    name: "MSI Cyborg 15",
    category: "laptops",
    amount: 1,
    price: 59990,
    description: `MSI Cyborg 15, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (8GBx2/512GB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX 2050, GDDR6 4GB/Black/1.98Kg), A12UCX-264IN
        
Brand	MSI
Model Name	Cyborg 15 A12UCX-264IN
Screen Size	40 Centimetres
Colour	Black
CPU Model	Core i5-12450H
RAM Memory Installed Size	16 GB
Operating System	Windows 11 Home
Special Feature	Thin
Graphics Card Description	Dedicated
Graphics Coprocessor	RTX 2050, GDDR6 4GB
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41prb8zbVPL._AC_SR160,160_.jpg",
  },
  {
    id: 36,
    name: "Lenovo Legion 5 Pro ",
    category: "laptops",
    amount: 1,
    price: 100090,
    description: `Lenovo Legion 5 Pro AMD Ryzen 7 5800H 16" (40.64cm) WQXGA-IPS 165Hz 500Nits Gaming Laptop (16GB/512GB SSD/Win 11/Office 2021/NVIDIA RTX 3060 6GB/Alexa/3 Month Game Pass/Storm Grey/2.45Kg), 82JQ010EIN
        
Brand	Lenovo
Model Name	Legion 5 Pro 16ACH6H
Screen Size	16 Inches
Colour	Storm Grey
Hard Disk Size	512 GB
CPU Model	Ryzen 7
RAM Memory Installed Size	16 GB
Operating System	Windows 11 Home
Special Feature	HD Audio, Backlit Keyboard, Memory Card Slot, Anti Glare Coating
Graphics Card Description
    `,
    imageUrl: "https://m.media-amazon.com/images/I/51ouy7AdTBL._AC_SR160,160_.jpg",
  },
  {
    id: 37,
    name: "MSI Modern 14",
    category: "laptops",
    amount: 1,
    price: 42990,
    description: `MSI Modern 14, Intel 12th Gen. i5-1235U, 35CM FHD 60Hz Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Intel Iris Xe/Black/1.4Kg), C12M-220IN
            
Brand	MSI
Model Name	9S7-14J112-220
Screen Size	14
Colour	Black
Hard Disk Size	512 GB
CPU Model	Core i5 Family
RAM Memory Installed Size	8 GB
Operating System	Windows 10 Home
Special Feature	Light Weight
Graphics Card Description	Integrated
    `,
    imageUrl: "https://m.media-amazon.com/images/I/41vk24f1e9L._AC_SR160,160_.jpg",
  },
  {
    id: 38,
    name: "Lenovo IdeaPad Flex 5",
    category: "laptops",
    amount: 1,
    price: 65990,
    description: `Lenovo IdeaPad Flex 5 Intel Core i5-1235U 14"(35.56cm) WUXGA IPS 2-in-1 Laptop (16GB/512GB SSD/Win 11/Office 2021/Backlit KB/Fingerprint/FHD Camera/Alexa/3 month Game Pass/Storm Grey/1.5Kg),82R700JJIN
            
Brand	Lenovo
Model Name	IdeaPad Flex 5 14IAU7
Screen Size	14 Inches
Colour	Storm Grey
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows 11 Home
Special Feature	Fingerprint Reader, Touchscreen, Backlit Keyboard, Thin, Built-in Microphone
Graphics Card Description	Integrated
Graphics Coprocessor	Intel Iris Xe Graphics
    `,
    imageUrl: "https://m.media-amazon.com/images/I/414U2R898uL._AC_SR320,320_.jpg",
  },
  {
    id: 39,
    name: "Acer Aspire 3 Intel Core i5 12th",
    category: "laptops",
    amount: 1,
    price: 42990,
    description: `Acer Aspire 3 Intel Core i5 12th Generation Laptop (Windows 11 Home/16GB/512 GB SSD/MS Office) A315-59 with 39.6 cm (15.6") Full HD Display, 1.7 Kg, Silver
        
Brand	Acer
Model Name	A315-59
Screen Size	15.6 Inches
Colour	Silver
Hard Disk Size	512 GB
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows
Special Feature	Acer TNR, Narrow Bezel
Graphics Card Description
    `,
    imageUrl: "https://m.media-amazon.com/images/I/71fgHQy31ZL._AC_UY218_.jpg",
  },
  {
    id: 40,
    name: "HP Victus Gaming Laptop",
    category: "laptops",
    amount: 1,
    price: 68990,
    description: `HP Victus Gaming Laptop, 12th Gen Intel Core i5-12450H, NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm), FHD, IPS, 144Hz, 9 ms Response time, 16GB DDR4, 512GB SSD, Backlit KB (MSO, Blue, 2.29 kg) fa0666TX
        
Brand	HP
Model Name	15-fa0666TX
Screen Size	39.6 Centimetres
Colour	Performance Blue
Hard Disk Size	512 GB
CPU Model	Core i5
RAM Memory Installed Size	16 GB
Operating System	Windows 11 Home
Special Feature	FHD, Backlit Keyboard, Micro-Edge Display, Anti-Glare, Numeric Keypad
Graphics Card Description	Dedicated

    `,
    imageUrl: "https://m.media-amazon.com/images/I/71h9nOTd93L._AC_UY218_.jpg",
  },

  // Toys
  {
    id: 41,
    name: "LEGO Star Wars Millennium Falcon",
    category: "toys",
    amount: 1,
    price: 9999,
    description: "Build the iconic Millennium Falcon from Star Wars...",
    imageUrl: "https://m.media-amazon.com/images/I/91BP3GhLyVL._AC_SL1500_.jpg",
  },
  {
    id: 42,
    name: "Barbie Dreamhouse",
    category: "toys",
    amount: 1,
    price: 17999,
    description: "The Barbie Dreamhouse is the ultimate dream...",
    imageUrl: "https://m.media-amazon.com/images/I/91wE8Yo3CXL._AC_SL1500_.jpg",
  },
  // ... 18 more toy products

  // Tools
  {
    id: 61,
    name: "Bosch 18V Cordless Drill/Driver Kit",
    category: "tools",
    amount: 1,
    price: 14999,
    description: "Powerful and versatile cordless drill/driver kit...",
    imageUrl: "https://m.media-amazon.com/images/I/81dzM4jqn1L._AC_SL1500_.jpg",
  },
  {
    id: 62,
    name: "DEWALT 20V MAX Combo Kit",
    category: "tools",
    amount: 1,
    price: 24999,
    description: "The DEWALT 20V MAX Combo Kit includes...",
    imageUrl: "https://m.media-amazon.com/images/I/71sh+bJ2RyL._AC_SL1500_.jpg",
  },
  // ... 18 more tool products

  // Kitchen
  // ... Add 20 kitchen products

  // Home Appliances
  // ... Add 20 home appliance products

  // Clothing
  // ... Add 20 clothing products

  // Sports
  // ... Add 20 sports products

  // Furniture
  // ... Add 20 furniture products

  // Bags
  // ... Add 20 bag products
];

export default products;
