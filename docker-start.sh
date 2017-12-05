#!/bin/sh
docker run --name vote_system_admin_ui -d --link="minioa-mongo:mongodb" vote_system_admin_ui:1.0
