import React from "react";
import { Activity } from "lucide-react";
import { Button } from "../../ui/button";
import StatCard from "../../common/statcard";
import { productivityStats } from "../../../data/mockData";

const ProductivityWidget: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-gray-500" />
          <h3 className="font-semibold text-gray-900 text-sm">
            Productivity Report
          </h3>
        </div>
        <Button size="sm" className="text-xs">
          ✨ Upgrade Plan
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {productivityStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default ProductivityWidget;
