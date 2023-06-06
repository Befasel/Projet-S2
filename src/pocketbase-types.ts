/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Books = "books",
	Movies = "movies",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type BooksRecord = {
	title?: string
	authors?: string
	average_rating?: number
	isbn?: number
	isbn13?: number
	language_code?: string
	num_pages?: number
	ratings_count?: number
	text_reviews_count?: number
	publication_date?: IsoDateString
	publisher?: string
	field13?: string
}

export type MoviesRecord = {
	title?: string
	time?: number
	release_year?: number
	genre?: string
	filmer?: string
	synopsis?: string
	note?: number
	attach?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type BooksResponse = Required<BooksRecord> & BaseSystemFields
export type MoviesResponse = Required<MoviesRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	books: BooksRecord
	movies: MoviesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	books: BooksResponse
	movies: MoviesResponse
	users: UsersResponse
}