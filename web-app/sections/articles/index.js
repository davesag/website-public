import React from 'react'
import { Route, Switch, match } from 'react-router-dom'
import PropTypes from 'prop-types'

import s from './index.scss'

import FindPost from './modules/find-post'

import ArticleList from './sections/article-list'
import Post from './sections/post'
import PostNotFound from './sections/post-not-found'

Articles.propTypes = {
  match: PropTypes.instanceOf(match)
}

export default function Articles({ match, ...rest }) {
  return (
    <section className={s['container']}>
      <Switch>
        <Route path={match.path} exact render={ArticleList} />
        <Route path={`${match.path}/:name`}>
          {({ match: { params } }) => (
            <FindPost
              name={params.name}
              success={Post}
              failure={PostNotFound}
            />
          )}
        </Route>
      </Switch>
    </section>
  )
}
