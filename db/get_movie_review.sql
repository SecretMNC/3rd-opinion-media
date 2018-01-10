SELECT *
FROM movie_reviews
-- INNER JOIN cover_art ON movie_reviews.art_id = cover_art.id
INNER JOIN users ON movie_reviews.user_id = users.id
WHERE movie_reviews.title = $1;