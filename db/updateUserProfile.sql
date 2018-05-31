
update users
set  useraddress =$2, usercity=$3,userstate= $4,userzip=$5, userphone =$6
where userid = $1
returning *;