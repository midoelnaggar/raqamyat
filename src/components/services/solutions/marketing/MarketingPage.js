import React from 'react'
import PageHeader from '../../../PageHeader'
import Solution from '../Solution'

export default function MarketingPage({data}) {
  return (
    <div>
        <PageHeader title="Marketing" breadcrumbs={"Services / Solutions / Marketing"} />
        <Solution data={data} />
    </div>
  )
}

