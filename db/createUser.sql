-- INSERT INTO users ( username,usermail,usercity,userstate,userzip,userphone,useraddress) VALUES ( $1, $2, $3, $4, $5, $6, $7)
-- returning *;

INSERT INTO users ( username,useremail ) VALUES ( $1, $2)
returning *;