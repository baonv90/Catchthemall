// Function to return all the matches positions of the Regex 
const REGEX = '[Mm]erci[Aa]pp';

export const getHighlightedContent = (text) => {
  let matches = [...text.matchAll(REGEX)];
  let positions = [];
  matches.forEach((match) => {
    positions.push(match.index);
  });

  return positions;
}