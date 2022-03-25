import React, { useState } from "react"
import Dialog from "./Dialog"
import Button from "@Components/button"

export default {
  title: "Components/Dialog",
  component: Dialog,
}

const Template = args => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <div>
      <Button text="click me" onClick={() => setOpenDialog(true)} />
      {openDialog && (
        <Dialog {...args} onClose={() => setOpenDialog(false)}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "white",
              width: "200px",
              height: "200px",
              margin: "auto",
            }}
          >
            Hi i am dialog
          </div>
        </Dialog>
      )}
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  dialogContentStyle: {},
  insertDomTree: document.body,
}
