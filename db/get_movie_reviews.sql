SELECT movie_reviews.movie_title, movie_reviews.title, movie_reviews.sample_text, movie_reviews.post_date, users.full_name, cover_art.url
FROM movie_reviews
INNER JOIN cover_art ON movie_reviews.art_id = cover_art.id
INNER JOIN users ON movie_reviews.user_id = users.id
ORDER BY post_date DESC LIMIT 10;