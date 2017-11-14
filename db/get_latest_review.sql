SELECT movie_reviews.title, movie_reviews.user_id, movie_reviews.media_title, cover_art.url, users.full_name
FROM movie_reviews
INNER JOIN cover_art ON movie_reviews.art_id = cover_art.id
INNER JOIN users ON movie_reviews.user_id = users.id
ORDER BY movie_reviews.id DESC LIMIT 1;