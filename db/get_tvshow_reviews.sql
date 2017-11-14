SELECT tvshow_reviews.media_title, tvshow_reviews.title, tvshow_reviews.sample_text, tvshow_reviews.post_date, users.full_name, cover_art.url
FROM tvshow_reviews
INNER JOIN cover_art ON tvshow_reviews.art_id = cover_art.id
INNER JOIN users ON tvshow_reviews.user_id = users.id
ORDER BY post_date DESC LIMIT 10;