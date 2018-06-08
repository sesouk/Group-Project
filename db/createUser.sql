

INSERT INTO users ( username,useremail ) VALUES ( $1, $2)
returning *;