insert into users (
    full_name, 
    portrait,
    email, 
    auth_id
)

values (
    $1,
    $2,
    $3,
    $4
)

returning * ;