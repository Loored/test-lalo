export type Id = Number;
export type Subject = String;

export type Email = {
    +id: Id,
    +text: Subject,
    +completed: boolean
}

export type Emails = Array<Email>;

export type EmailsState = {
    +emails: Emails
}

export type EmailsAction = 
    | { type: 'DELETE', +id: Id, +text: Text }
    | { type: 'TOGGLE_EMAIL', +id: Id };