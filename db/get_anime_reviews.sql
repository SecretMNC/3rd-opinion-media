SELECT anime_reviews.media_title, anime_reviews.title, anime_reviews.sample_text, anime_reviews.post_date, anime_reviews.art_url, users.full_name
FROM anime_reviews
-- INNER JOIN cover_art ON anime_reviews.art_id = cover_art.id
INNER JOIN users ON anime_reviews.user_id = users.id
ORDER BY post_date DESC;