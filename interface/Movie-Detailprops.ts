interface Iratings {
	Source: string;
	Value: string;
}

export interface MovieDetailProps {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: '22 min';
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Ratings: Iratings[];
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	totalSeasons: string;
	Response: string;
}
