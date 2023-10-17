import React from 'react'

/**
 * Component to display an alert message with a title and subtitle.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} props.showAlert - A boolean flag to determine if the alert should be shown.
 * @param {string} props.title - The title of the alert.
 * @param {string} props.subtile - The subtitle of the alert.
 * @returns {JSX.Element|null} JSX element representing the alert or null if showAlert is false.
 */

export const CustomAlert = ({showAlert, title, subtile}) => {
  return (
    (showAlert && (
        <section role="alert">
            <div className="bg-red-500 text-white font-bold rounded-t px-2 py-2 text-sm">
            {title}
            </div>
            <div className="border border-t-0 text-sm border-red-400 rounded-b bg-red-100 px-3 py-2 text-red-700">
                <p>{subtile}</p>
            </div>
        </section>
    ))
  )
}
