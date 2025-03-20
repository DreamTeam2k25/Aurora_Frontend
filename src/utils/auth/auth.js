export const findData = (data, param) => {
    const response = data.find((s) => s.title == param)
    return response
}