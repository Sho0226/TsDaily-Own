# Daily Note for 20250331

- [ ] 今日の学習内容

      git branch -m ~~~~~
      =>ブランチ名の変更ができる
      大文字-Mにすると強制変更

      git stash シンプルに退避
      git stash -u シンプルに退避（untrackedファイルも含む）
      ※untrackedファイル=>ステージングしていない(git add)新しいファイルのこと
      git stash -a シンプルに退避(ignoreファイルも含む)
      git stash save "メッセージ" メッセージ付きで退避
      git stash save -u "メッセージ" メッセージ付きで退避（untrackedファイルも含む）
      git stash save -a "メッセージ" メッセージ付きで退避（ignoreファイルも含む）

      git stash list(対比の一覧を見る)
      git stash pop(最新の退避を現在のブランチに反映させる)※退避リストからは削除
      git stash apply(最新の退避を現在のブランチに反映させる)※退避リストに残す
      git stash apply 'list番号'(指定した退避をブランチに反映させる)

- [ ] 今日の振り返り
