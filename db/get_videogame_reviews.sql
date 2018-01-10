SELECT videogame_reviews.media_title, videogame_reviews.title, videogame_reviews.sample_text, videogame_reviews.post_date, videogame_reviews.art_url, users.full_name
FROM videogame_reviews
-- INNER JOIN cover_art ON videogame_reviews.art_id = cover_art.id
INNER JOIN users ON videogame_reviews.user_id = users.id
ORDER BY post_date DESC;