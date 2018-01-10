insert into anime_reviews (user_id, title, post_date, review, sample_text, art_id, media_title, rating, art_url)
values (
$1,
$2,
current_date,
$3,
$4,
null,
$5,
$6,
$7
);