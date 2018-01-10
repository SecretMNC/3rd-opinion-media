SELECT *
FROM tvshow_reviews
-- INNER JOIN cover_art ON tvshow_reviews.art_id = cover_art.id
INNER JOIN users ON tvshow_reviews.user_id = users.id
WHERE tvshow_reviews.title = $1;