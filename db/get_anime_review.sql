SELECT *
FROM anime_reviews
INNER JOIN cover_art ON anime_reviews.art_id = cover_art.id
INNER JOIN users ON anime_reviews.user_id = users.id
WHERE anime_reviews.title = $1;