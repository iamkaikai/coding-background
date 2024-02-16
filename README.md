# SlideShow

SlideShow is a simple, lightweight web application designed to display a slideshow of images and videos stored locally. This server, built with Express.js, serves random code snippets and multimedia files for display in a web browser. It's an excellent tool for showcasing your favorite images, videos, or snippets in a continuous loop, right from your local machine.

## Features

- Random code snippet display from a predefined list.
- Slideshow of local images and videos.
- Support for various file formats, including jpg, jpeg, png, gif, mp4, mov, m4v, mpg, m4v, wmv, webm, and ogg.
- Easy to navigate and lightweight UI.

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js installed on your local machine. You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/iamkaikai/coding-background.git
```

2. Navigate to the project directory:
```bash
cd SlideShow
```

3. Install the required npm packages:
```bash
npm install
```

4. Start the server:
```bash
npm start
```

The server will start on port 8188, and you can access the slideshow by navigating to http://localhost:8188/slideshow in your web browser.

# Adding Your Media
To add your images or videos to the slideshow, place them in the public/src directory. The application will automatically include them in the slideshow rotation.

# Usage
Navigate to http://localhost:8188/slideshow to view your slideshow. The application will randomly display code snippets or cycle through your media files, showcasing each for a preset duration before transitioning to the next.

For developers, the project includes endpoints to fetch random code snippets and list media files available for the slideshow.

# Contributing
Contributions are welcome! If you have suggestions for improvements or bug fixes, please feel free to fork the repository, make your changes, and submit a pull request.

# License
This project is licensed under the MIT License - see the LICENSE file for details.
