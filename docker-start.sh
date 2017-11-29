#!/bin/sh
docker run --name vote_system_admin_ui --link="minioa-mongo:mongodb" -d vote_system_admin_ui:1.0
