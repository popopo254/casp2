const db = require('../../config/database')

const getP4 = `
    SELECT
        p.project_id,
        p.project_type,
        pd.project_data_p_4
    FROM projects p
    INNER JOIN project_data pd ON pd.project_id = p.project_id
    WHERE p.project_id = ? AND p.project_user = ? AND p.project_type = ?
`

const TS_Get_P4 = (data, callback) => {
    const { project_id, project_type, project_user } = data

    //console.log('TS_Get_P4 received data:', { project_id, project_user, project_type })

    db.query(getP4, [project_id, project_user, project_type], (err, result) => {
        if (err) {
            console.error('Database query error in TS_Get_P4:', err)
            return callback(err, null)
        }
        
        // Process the results to properly parse the JSON
        const processedResults = result.map(row => {
            try {
                if (row.project_data_p_4) {
                    // First remove any extra quotes and escape characters
                    let jsonString = row.project_data_p_4
                    
                    // Check if it's a string wrapped in quotes
                    if (typeof jsonString === 'string' && 
                        jsonString.startsWith('"') && 
                        jsonString.endsWith('"')) {
                        jsonString = jsonString.slice(1, -1)
                    }
                    
                    // Replace escaped quotes if they exist
                    jsonString = jsonString.replace(/\\"/g, '"')
                    
                    // Parse the cleaned JSON string
                    return {
                        ...row,
                        project_data_p_4: JSON.parse(jsonString)
                    }
                }
                return row
            } catch (parseError) {
                console.error('Error parsing project_data_p_4:', parseError)
                console.error('Problematic data:', row.project_data_p_4)
                return {
                    ...row,
                    project_data_p_4: null
                }
            }
        })

        //console.log('Processed query result:', processedResults)
        
        callback(null, {
    success: true,
    message: 'P4 Data fetched successfully',
    data: processedResults[0] // Return first item directly as object
    // OR keep as array: data: processedResults
});
    })
}
module.exports = TS_Get_P4