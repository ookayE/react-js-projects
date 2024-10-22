import React, { useState, useEffect } from "react";
import { parseSrtFile, searchSubtitles } from "../utilities/parser";
import { formatSubtitleText } from "../utilities/helper";

const ClipFinder = () => {
  const [subtitles, setSubtitles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadSubtitles = async () => {
      const parsedSubtitles = await parseSrtFile();
      setSubtitles(parsedSubtitles);
    };

    loadSubtitles();
  }, []);

  const handleSearch = () => {
    if (searchQuery) {
      const results = searchSubtitles(subtitles, searchQuery);
      setSearchResults(results);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search quotes..."
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map((result, index) => (
          <div key={index}>
            <p>{formatSubtitleText(result.text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClipFinder;
