/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as QuizBuilderQuizIdImport } from './routes/quiz-builder/$quizId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const QuizBuilderQuizIdRoute = QuizBuilderQuizIdImport.update({
  id: '/quiz-builder/$quizId',
  path: '/quiz-builder/$quizId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/quiz-builder/$quizId': {
      id: '/quiz-builder/$quizId'
      path: '/quiz-builder/$quizId'
      fullPath: '/quiz-builder/$quizId'
      preLoaderRoute: typeof QuizBuilderQuizIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/quiz-builder/$quizId': typeof QuizBuilderQuizIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/quiz-builder/$quizId': typeof QuizBuilderQuizIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/quiz-builder/$quizId': typeof QuizBuilderQuizIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/quiz-builder/$quizId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/quiz-builder/$quizId'
  id: '__root__' | '/' | '/quiz-builder/$quizId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  QuizBuilderQuizIdRoute: typeof QuizBuilderQuizIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  QuizBuilderQuizIdRoute: QuizBuilderQuizIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/quiz-builder/$quizId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/quiz-builder/$quizId": {
      "filePath": "quiz-builder/$quizId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
