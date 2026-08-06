global.debugLog = (level, message) => {
    level.runCommand('say ' + message)
}