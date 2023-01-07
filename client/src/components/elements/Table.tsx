import React from 'react'

interface Parents {
    children: JSX.Element | JSX.Element[] | string
}

export const Table: React.FunctionComponent<Parents> = (props) => {
  return (
    <table className=" w-full text-sm text-left table-auto text-gray-400 border-collapse border border-slate-900 border-opacity-20">{props.children}</table>
  )
}

export const Thead: React.FunctionComponent<Parents> = (props) => {
    return (
        <thead className="text-xs text-white uppercase">{props.children}</thead>
    )
}

export const Tr: React.FunctionComponent<Parents> = (props) => {
    return (
        <tr className=" bg-light-grey/[.1]">{props.children}</tr>
    )
}

export const Th: React.FunctionComponent<Parents> = (props) => {
    return (
        <th scope="col" className="py-3 px-6 border border-slate-600 border-opacity-20">{props.children}</th>
    )
}

export const Td: React.FunctionComponent<Parents> = (props) => {
    return (
        <td className="py-4 px-6 border border-slate-600 border-opacity-20">{props.children}</td>
    )
}

