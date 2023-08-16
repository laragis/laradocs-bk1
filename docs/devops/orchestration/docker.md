# Docker

## Backup
### PostgreSQL volume

[**Fix Docker postgres invalid primary checkpoint record**](https://stackoverflow.com/questions/48197579/docker-postgres-invalid-primary-checkpoint-record)

Add `command: tail -f /dev/null` to service block in `docker-compose.yml`

Run command `docker compose exec db bash`

Inside container, run command `su postgres -c "pg_resetwal -f /var/lib/postgresql/data"`

If error message exists `lock file "postmaster.pid" exists`, Remove lock file `rm -rf /var/lib/postgresql/data/postmaster.pid`
