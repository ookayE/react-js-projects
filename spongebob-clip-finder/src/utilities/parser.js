import SrtParser from "srt-parser-2";
import Fuse from "fuse.js";

// Function to parse the SRT file
const parseSrtFile = async () => {
  const response = await fetch(
    "/transcripts/SpongeBob SquarePants - 1x01 - Help Wanted.eng.srt"
  );
  const srtContent = await response.text(); // Get the .srt content as text

  const parser = new SrtParser();
  const subtitles = parser.fromSrt(srtContent); // Parse the SRT content into an array of subtitle objects

  return subtitles;
};

const searchSubtitles = (subtitles, query) => {
  const fuse = new Fuse(subtitles, {
    keys: ["text"], // The key in each object to search (subtitle text)
    includeScore: true, // Optionally include the score for ranking
  });

  const results = fuse.search(query);

  // Map results to include relevant subtitle data and score
  const matchingSubtitles = results.map((result) => ({
    ...result.item, // Original subtitle data
    score: result.score, // Fuzzy match score
  }));

  // Sort results by `startTime` to maintain the original order of appearance
  return matchingSubtitles.sort((a, b) =>
    a.startTime.localeCompare(b.startTime)
  );
};

export { parseSrtFile, searchSubtitles };
