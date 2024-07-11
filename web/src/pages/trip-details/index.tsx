import { useState } from 'react'

import { Plus } from 'lucide-react'

import { Button } from '../../components/ui/button'

import { Guests } from './guests'
import { Activities } from './activities'
import { ImportantLinks } from './important-links'
import { ActivityCreationDialog } from './activity-creation-dialog'
import { DestinationAndDateHeader } from './destination-and-date-header'

export function TripDetailsPage() {
  const [isActivityCreationDialogOpen, setIsActivityCreationDialogOpen] =
    useState(false)

  function openActivityCreationDialog() {
    setIsActivityCreationDialogOpen(!isActivityCreationDialogOpen)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3x font-semibold">Atividades</h2>
            <Button onClick={openActivityCreationDialog}>
              <Plus className="size-5" />
              Cadastrar Atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>
      {isActivityCreationDialogOpen && (
        <ActivityCreationDialog onOpenChange={openActivityCreationDialog} />
      )}
    </div>
  )
}
