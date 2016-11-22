import * as fs from 'fs'

export const getFile =
(filePath: string) => {
  fs.readFile(filePath, handleFile)
}
