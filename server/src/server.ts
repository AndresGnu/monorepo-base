import { createApp, toNodeListener ,eventHandler} from 'h3'
import { listen } from 'listhen'

const app = createApp()
app.use('/', eventHandler(() => 'Hello world!'))

listen(toNodeListener(app))