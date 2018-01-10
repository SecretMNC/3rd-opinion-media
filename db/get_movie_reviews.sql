SELECT movie_reviews.media_title, movie_reviews.title, movie_reviews.sample_text, movie_reviews.post_date, movie_reviews.art_url, users.full_name
FROM movie_reviews
-- INNER JOIN cover_art ON movie_reviews.art_id = cover_art.id
INNER JOIN users ON movie_reviews.user_id = users.id
ORDER BY post_date DESC;