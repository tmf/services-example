import { state as createExampleApiInitialState } from 'example-api-connector';

export default {
    ...createExampleApiInitialState(),
    visibilityFilter: 'SHOW_ALL'
}