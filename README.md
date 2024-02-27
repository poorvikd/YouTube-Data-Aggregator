# Tube Insights

Tube Insights is a powerful YouTube aggregator designed to provide users with detailed insights into their favorite YouTube channels. By leveraging the YouTube Data API, Tube Insights offers a seamless experience to search for channels, view key statistics, and explore video content and playlists, all in one intuitive interface.

## Features

- **Channel Search**: Easily search for YouTube channels to gather insights using the handle name.
- **Statistics Overview**: View key statistics of YouTube channels including subscriber count, total views, and video count.
- **Content Exploration**: Explore videos and playlists associated with the channels.
- **Batch Analysis**: Analyze multiple channels at once for comparative insights.
- **Interactive Data Visualization**: Gain deeper insights through interactive data visualizations of channel metrics.
- **Responsive Design**: A fully responsive layout ensures a great experience on both desktop and mobile devices.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://npmjs.com/) (version 6.x or later)

### Installation

1. **Clone the repository**

```sh
git clone https://github.com/poorvikd YouTube-Data-Aggregator.git
cd tubeinsights
```

2. **Install dependencies**

```sh
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add your YouTube Data API key:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_data_api_key_here
```

4. **Run the application**

```sh
npm start
```

This will start the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

To use Tube Insights, simply enter the handle name of the YouTube channel you're interested in the search bar. You can also enter multiple channel names separated by commas for batch analysis. The dashboard will update with the channels' statistics, videos, and playlists.

## Technologies

- **React**: For building the user interface.
- **Material-UI**: For styling and layout.
- **Axios**: For making HTTP requests to the YouTube Data API.
- **react-loader-spinner**: For loading animations.
- **rechart.js**: For data visualization.

## Limitations

Tube Insights aims to provide a comprehensive overview of YouTube channel statistics, videos, and playlists. However, due to YouTube Data API quota limitations and to ensure a smooth user experience for everyone, the following restrictions are in place:

- **Playlists Fetch Limit**: The tool fetches up to 10 playlists for each channel. This allows us to provide a snapshot of the channel's content while managing API usage effectively.
- **Videos Fetch Limit**: For each playlist, the tool retrieves up to 10 videos. This limit helps prevent exhausting the API quota, especially when dealing with channels that have extensive video libraries.

These limitations are designed to balance the depth of insights with the practical considerations of API rate limits. Some popular channels have over 13,000 videos, and fetching all videos or playlists in one shot could quickly exhaust the available quota, affecting the service's availability for all users.

We continuously seek ways to optimize our API usage and may adjust these limits in the future to offer more comprehensive insights without compromising service reliability.

## Contributing to Tube Insights

We are always looking for ways to improve Tube Insights and make it more valuable to our users. Whether it's a new feature suggestion, a bug you've discovered, or any other type of feedback, we welcome your contributions!

### How to Contribute

- **Feature Suggestions and Feedback**: If you have ideas on how to make Tube Insights better or feedback on its current features, we would love to hear from you.

- **Bug Reports**: Encountered a bug? Help us improve by reporting it. Please include as much detail as possible to help us understand and replicate the issue. This includes steps to generate the bug, screenshots, or any other supporting documents that could be helpful.

### Sending Your Contributions

Please send your suggestions, feedback, or bug reports via email to [poorvikdharmendra@gmail.com](mailto:poorvikdharmendra@gmail.com).

Your contributions are invaluable to us, and we strive to review and respond to every message we receive. Thank you for helping us make Tube Insights even better!

## License

Tube Insights is open-source software licensed under the GPL-3.0 License.
