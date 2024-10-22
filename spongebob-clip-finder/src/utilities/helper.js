const formatSubtitleText = (text) => {
  // Remove any HTML tags (like <i> or <b>)
  const cleanedText = text.replace(/<[^>]*>/g, "").replace(/♪/g, "");
  // Return the cleaned subtitle text
  return cleanedText;
};

// Helper function to convert timestamp (00:01:23,456) to seconds
const timeToSeconds = (time) => {
  const [hours, minutes, seconds] = time.split(":");
  const [secs, ms] = seconds.split(",");
  return (
    Number(hours) * 3600 +
    Number(minutes) * 60 +
    Number(secs) +
    Number(ms) / 1000
  );
};

export { formatSubtitleText, timeToSeconds };
