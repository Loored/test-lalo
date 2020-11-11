export type VisibilityFilter = 'INBOX' | 'SPAM' | 'DELETED';

export type VisibilityFilterState = {
    +VisibilityFilter: VisibilityFilter
};

export type VisibilityFilterAction = {
    type: 'SET_VISIBILITY_FILTER',
    +filter: VisibilityFilter
};
