SELECT *
FROM videogame_reviews
INNER JOIN cover_art ON videogame_reviews.art_id = cover_art.id
INNER JOIN users ON videogame_reviews.user_id = users.id
WHERE videogame_reviews.title = $1;