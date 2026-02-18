#!/bin/bash

git filter-branch --env-filter '
if [ \"$GIT_AUTHOR_NAME\" = \"testaccntqa2023\" ] || [ \"$GIT_AUTHOR_EMAIL\" = \"testaccntqa2023@gmail.com\" ]; then
  export GIT_AUTHOR_NAME=\"divyaantonyan\"
  export GIT_AUTHOR_EMAIL=\"divyaantony.an@gmail.com\"
fi
if [ \"$GIT_COMMITTER_NAME\" = \"testaccntqa2023\" ] || [ \"$GIT_COMMITTER_EMAIL\" = \"testaccntqa2023@gmail.com\" ]; then
  export GIT_COMMITTER_NAME=\"divyaantonyan\"
  export GIT_COMMITTER_EMAIL=\"divyaantony.an@gmail.com\"
fi
' -- --all

if [ "$GIT_AUTHOR_NAME" = "testaccntqa2023" ]; then
  export GIT_AUTHOR_NAME="divyaantonyan"
  export GIT_AUTHOR_EMAIL="divyaantony.an@gmail.com"
fi
if [ "$GIT_COMMITTER_NAME" = "testaccntqa2023" ]; then
  export GIT_COMMITTER_NAME="divyaantonyan"
  export GIT_COMMITTER_EMAIL="divyaantony.an@gmail.com"
fi
' -- --all
