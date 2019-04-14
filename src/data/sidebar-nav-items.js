export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      htmlAfter: ""
    },
    {
      title: "Content",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/content",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/users",
    },
    {
      title: "Subscribers",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/subscribers",
    },
    {
      title: "Products",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/products",
    }
  ];
}
