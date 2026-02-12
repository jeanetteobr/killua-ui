import React from "react";
import "./PropsTable.css";

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="docs-props">
      <h3 className="docs-props__title">Props</h3>
      <div className="docs-props__table-wrapper">
        <table className="docs-props__table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name}>
                <td>
                  <code className="docs-props__name">
                    {prop.name}
                    {prop.required && <span className="docs-props__required">*</span>}
                  </code>
                </td>
                <td>
                  <code className="docs-props__type">{prop.type}</code>
                </td>
                <td>
                  {prop.default ? (
                    <code className="docs-props__default">{prop.default}</code>
                  ) : (
                    <span className="docs-props__none">—</span>
                  )}
                </td>
                <td className="docs-props__description">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
